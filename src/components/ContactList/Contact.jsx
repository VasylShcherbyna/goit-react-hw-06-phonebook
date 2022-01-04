import React from 'react';
import { useDispatch } from 'react-redux';
import s from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
import { removeContact } from '../../redux/contacts/contacts-actions';
export default function Contact({ name, number, id }) {
    const dispatch = useDispatch();
    return (
         <li className={s.listItem} key={id}>
            {`${name}: ${number}`}
            <button
              className={s.btn}
              type="button"
              // onClick={() => onRemoveContact(id)}
              onClick={() => dispatch(removeContact(id))}
            >
              Remove
            </button>
          </li>
    )
}
