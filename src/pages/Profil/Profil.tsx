/* eslint-disable jsx-a11y/alt-text */
import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonModal } from '@ionic/react';
import React, { useState } from 'react';
import './Profil.css';

const Profil: React.FC = () => {

  const [showModal, setShowModal] = useState<boolean>(false);

  const [name, setName] = useState<string | undefined>(undefined);

  const [apport, setApport] = useState<number | undefined>(undefined);

  const [launRate, setLaunRate] = useState<number | undefined>(undefined);

  const [assuranceRate, setAssuranceRate] = useState<number | undefined>(undefined);

  const [launTerm, setLaunTerm] = useState<number | undefined>(undefined);

  const [notaryFees, setNotaryFees] = useState<number | undefined>(undefined);

  const reset = () => {
    setName(undefined);
    setApport(undefined);
    setLaunRate(undefined);
    setAssuranceRate(undefined);
    setLaunTerm(undefined);
    setNotaryFees(undefined);
  }

  return (
    <React.Fragment>
      <IonCard>
        <IonCardHeader>
          <IonItem>
            <IonListHeader className="listHeader">
              Profil
            </IonListHeader>
            <IonAvatar slot="end" onClick={() => setShowModal(true)}>
              <img src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg" />
            </IonAvatar>
          </IonItem>
        </IonCardHeader>
        <IonCardContent>

          <IonList>
            <IonItem>
              <IonLabel position='stacked'>Nom</IonLabel>
              <IonInput 
                placeholder="Votre nom"
                value={name}
                onIonChange={(e) => setName(e.detail.value as string)}></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position='stacked'>Apport (€)</IonLabel>
              <IonInput
                type="number"
                placeholder="10000"
                value={apport}
                onIonChange={(e) => setApport(e.detail.value ? +e.detail.value : undefined)}>
              </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position='stacked'>Taux emprunt (%)</IonLabel>
              <IonInput
                type="number"
                placeholder="250000"
                value={launRate}
                onIonChange={(e) => setLaunRate(e.detail.value ? +e.detail.value : undefined)}>
              </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position='stacked'>Taux assurance (%)</IonLabel>
              <IonInput 
                type="number"
                placeholder="5%"
                value={assuranceRate}
                onIonChange={(e) => setAssuranceRate(e.detail.value ? +e.detail.value : undefined)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position='stacked'>Durée de l’emprunt (années)</IonLabel>
              <IonInput 
                type="number"
                placeholder="5 ans"
                value={launTerm}
                onIonChange={(e) => setLaunTerm(e.detail.value ? +e.detail.value : undefined)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position='stacked'>Frais de notaire (%)</IonLabel>
              <IonInput 
                type="number"
                placeholder="6.5"
                value={notaryFees}
                onIonChange={(e) => setNotaryFees(e.detail.value ? +e.detail.value : undefined)}></IonInput>
            </IonItem>
          </IonList>
          <IonButton fill='solid' expand='full'>Sauvegarder</IonButton>
          <IonButton fill='solid' expand='full' onClick={reset}>Reset</IonButton>
        </IonCardContent>

      </IonCard>

      <IonModal isOpen={showModal} >
        <p>METTRE A JOUR LA PHOTO</p>
        <IonButton onClick={() => setShowModal(false)}>Fermer</IonButton>

      </IonModal>
    </React.Fragment>
  );
};

export default Profil;
