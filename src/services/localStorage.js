/**
 * File: localStorage.js
 * Author: Joseph Koh
 * Description: Functions for interacting with local storage
 */

// Function to retrieve data from local storage
export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(`${key}`));
};

// Function to Save data to local storage
export const saveToLocalStorage = (value, key) =>
  localStorage.setItem(`${key}`, JSON.stringify(value));

// Function to remove from local storage based on specified key
export const clearFromLocalStorage = (key) => localStorage.removeItem(`${key}`);
