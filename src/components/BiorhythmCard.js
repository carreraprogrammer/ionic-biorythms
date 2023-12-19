import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import dayjs from 'dayjs';

const formatDate = (isoString) => {
  return dayjs(isoString).format('D MMM YYYY');
};

function BiorhythmCard({ targetDate }) {

  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Physical: ???</p>
        <p>Emotional: ???</p>
        <p>Intellectual: ???</p>
      </IonCardContent>
    </IonCard>
  );
}

export default BiorhythmCard;