import React, { useState, useContext, useEffect } from 'react';
import ListItem from '../components/ListItem';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [itemList, setItemList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [itemsLeft, setItemLeft] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const setCompleted = (id) => {
    const updatedList = itemList.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setItemList(updatedList);
  };

  const removeItem = (id) => {
    const updatedList = [...itemList].filter((item) => item.id !== id);
    setItemList(updatedList);
  };

  const getItemsLeft = () => {
    const newList = itemList.filter((item) => !item.completed);
    setItemLeft(newList.length);
  };

  const deleteCompletedTasks = () => {
    const newList = itemList.filter((item) => !item.completed);
    setItemList(newList);
  };

  const filterList = (filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setFilteredList(itemList);
    }
    if (filter === 'Active') {
      const newList = itemList.filter((item) => !item.completed);
      setFilteredList(newList);
    }

    if (filter === 'Completed') {
      const newList = itemList.filter((item) => item.completed);
      setFilteredList(newList);
    }
  };

  useEffect(() => {
    getItemsLeft();
    setFilteredList(itemList);
  }, [itemList]);

  useEffect(() => {
    const event = window.addEventListener('resize', () => {
      if (window.innerWidth >= 1440) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    });
    return () => window.removeEventListener('resize', event);
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        itemList,
        setItemList,
        setCompleted,
        removeItem,
        itemsLeft,
        deleteCompletedTasks,
        filteredList,
        filterList,
        activeFilter,
        isDesktop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
