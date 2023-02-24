import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Button, ButtonItem, TextArea } from '../styleDefinition/buttons_inputs';

const DefaultStateItem = {
    description: ""
}

const ModalCreateItem = ({ onItem }) => {
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState(DefaultStateItem)

    const handleSubmit = () => {
        onItem(item)
        setItem(DefaultStateItem)
        setOpen(false)
    }

    return (
        <div>
            <ReactModal style={customStyles} isOpen={open} onRequestClose={() => setOpen(false)}>
                <h3>Intégrer un nouveau lot</h3>
                <TextArea
                    name="item"
                    placeholder=" Ex : Collier en or jaune(585) orné d'un saphir..."
                    value={item.description}
                    onChange={(e) => setItem({ description: e.target.value })}
                />
                <Button onClick={handleSubmit}>Ajouter l'objet</Button>
            </ReactModal>
            <ButtonItem onClick={() => setOpen(true)}>+</ButtonItem>
        </div>
    );
};

const customStyles = {
    content: {
        borderRadius: 10,
        backgroundColor: "#ddd9d9",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 380,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
};

export default ModalCreateItem;