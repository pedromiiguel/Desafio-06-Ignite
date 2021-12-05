import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="900px" maxH="600px" w="auto">
        <ModalBody bg="#353431" p="0" maxW="900px" maxH="600px" w="auto">
          <Image
            boxSize="300px"
            objectFit="cover"
            src={imgUrl}
            alt="Segun Adebayo"
          />
        </ModalBody>

        <ModalFooter
          bg="#353431"
          borderBottomRightRadius="6px"
          borderBottomLeftRadius="6px"
        >
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
