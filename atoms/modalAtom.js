import { atom } from 'recoil';

export const modalState = atom({
    key: 'modalState',
    default: false,
});

// create a global state for adding pictures.
// state is changed on clicking the add picture button