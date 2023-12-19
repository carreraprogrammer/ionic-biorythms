import { IonApp, IonContent, IonHeader, IonInput, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/react';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Your Name</IonLabel>
          <IonInput onIonChange={(event) => setName(event.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Date of Birth</IonLabel>
          <IonInput 
            type='date' 
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>

        <h2>Hello {name}, you borned on <b>{birthDate}</b></h2>
      </IonContent>
    </IonApp>
  );
}

export default App;
