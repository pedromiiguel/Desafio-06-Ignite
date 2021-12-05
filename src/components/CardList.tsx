import { Grid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState('');
  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <>
      {/* TODO CARD GRID */}

      <Grid templateColumns="repeat(3, 1fr)" gap="40px">
        {cards?.map(card => {
          const { url } = card;
          return (
            <Card
              key={card.id}
              data={card}
              viewImage={() => {
                setSelectedImage(url);
                onOpen();
              }}
            />
          );
        })}
      </Grid>
      <ModalViewImage
        imgUrl={selectedImage}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
