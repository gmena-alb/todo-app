import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const getLocalStorageList = () => {
    let itemList = localStorage.getItem('itemList');
    if (itemList) {
      return (itemList = JSON.parse(localStorage.getItem('itemList')));
    } else {
      return [];
    }
  };

  const getLocalStorageTheme = () => {
    let theme = localStorage.getItem('theme');
    if (theme) {
      return (theme = JSON.parse(localStorage.getItem('theme')));
    } else {
      return 'light';
    }
  };

  const [theme, setTheme] = useState(getLocalStorageTheme());
  const [itemList, setItemList] = useState(getLocalStorageList());
  const [filteredList, setFilteredList] = useState([]);
  const [itemsLeft, setItemLeft] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
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
    filterList(activeFilter);
    localStorage.setItem('itemList', JSON.stringify(itemList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemList]);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

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
