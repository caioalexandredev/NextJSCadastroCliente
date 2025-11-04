import { Dispatch, SetStateAction } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { Client } from 'libs/interface/Client';

type Props = {
  deleteDialogOpen: boolean;
  setDeleteDialogOpen: Dispatch<SetStateAction<boolean>>;
  selectedClient: Client|null;
  handleDeleteClient: () => void;
}

export default function DeleteClientDialog({
  deleteDialogOpen,
  setDeleteDialogOpen,
  selectedClient,
  handleDeleteClient
}: Props) {
  return <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
    <AlertDialogContent className="bg-white/95 backdrop-blur-md">
      <AlertDialogHeader>
        <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
        <AlertDialogDescription>
          Tem certeza que deseja excluir o cliente <span className="font-semibold">{selectedClient?.name}</span>?
          Esta ação não poderá ser desfeita.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction
          onClick={handleDeleteClient}
          className="bg-red-500 hover:bg-red-600"
        >
          Excluir
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
}