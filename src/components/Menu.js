import React, { useState } from 'react';
import './../styles/Menu-deroulant.css';

const Menu = ({Guest}) => {
    const [guest,setGuest] = useState(Guest);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(() => initSelectedItem(Guest));

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item.label);
        sessionStorage.setItem('menu', item.label);
        setIsOpen(false);
    };

    const menuItems = [
        { id: 1, label: 'Selectionner menu' },
        { id: 2, label: 'Adulte' },
        { id: 3, label: 'Enfant' },
    ];

    function initSelectedItem (guestdata)
    {
        if (guestdata.menu == "")
            {
                sessionStorage.setItem('menu', "");
                return 'Select an option'
            }
        else
        {
            sessionStorage.setItem('menu', guestdata.menu);
            return guestdata.menu
        }

    }

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {selectedItem}
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {menuItems.map((item) => (
                        <div key={item.id} className="dropdown-item" onClick={() => handleItemClick(item)}>
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Menu;