import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { createNewItem, createNewSale } from '../../API';
import ModalCreateItem from '../modalCreateItem';
import { Button, TextArea } from '../styleDefinition/buttons_inputs'; import { ContainerCardsLots, CardLot, SectionNewSale } from './style';
;

const DefaultStateSale = {
    title: "",
    description: ""
}

const CreateNewSale = () => {
    const [newSale, setNewSale] = useState(DefaultStateSale)
    const [items, setItems] = useState([])

    const handleSubmit = async () => {
        if (!newSale.title || !newSale.description || items.length === 0) return null

        let res = await createNewSale(newSale)

        if (res?.status === 201) {
            items.map((item) => {
                createNewItem(item, res.data.id)
            })
            toast.success("Vente créée avec succès")
            setNewSale(DefaultStateSale)
            setItems([])
        } else {
            toast.error("Une erreur est survenue")
        }
    };

    const handleDelete = (index) => {
        const newItems = [...items]
        newItems.splice(index, 1)
        setItems(newItems)
    };

    return (
        <SectionNewSale>
            <h2>Titre de la vente</h2>
            <TextArea
                type="text"
                placeholder="Ex: Ventes de vins et spiritueux"
                autoFocus={true}
                value={newSale.title}
                onChange={(e) => setNewSale({ ...newSale, title: e.target.value })}
            />

            <h2>Description de la vente</h2>
            <TextArea
                type="text"
                placeholder='Ex: Ensemble de vins bourguignons...'
                value={newSale.description}
                onChange={(e) => setNewSale({ ...newSale, description: e.target.value })}
            />

            <h2 style={{ marginTop: 43 }}>Les lots</h2>

            <ModalCreateItem onItem={(item) => setItems([...items, item])} />

            <ContainerCardsLots>
                {items?.map((item, index) =>
                    <CardLot key={index}>
                        <h3>Lot {index + 1}</h3>
                        <p>{item.description}</p>
                        <div onClick={() => handleDelete(index)}> Supprimer </div>
                    </CardLot>
                )}
            </ContainerCardsLots>

            <Button
                onClick={handleSubmit}
                disabled={!newSale.title || !newSale.description || items.length === 0}
                style={{ marginTop: 100 }}>
                Créer la vente
            </Button>
        </SectionNewSale>
    );
};

export default CreateNewSale;