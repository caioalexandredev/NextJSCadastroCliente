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
import { Loader2 } from 'lucide-react';

type Props = {
  deleteDialogOpen: boolean;
  setDeleteDialogOpen: Dispatch<SetStateAction<boolean>>;
  selectedClient: Client | null;
  handleDeleteClient: () => void;
  isLoading?: boolean; // Nova prop
}

export default function DeleteClientDialog({
  deleteDialogOpen,
  setDeleteDialogOpen,
  selectedClient,
  handleDeleteClient,
  isLoading = false
}: Props) {
  return (
    <AlertDialog 
      open={deleteDialogOpen} 
      onOpenChange={(val) => {
        // Bloqueia fechamento se estiver carregando
        if (!isLoading) setDeleteDialogOpen(val);
      }}
    >
      <AlertDialogContent className="bg-white/95 backdrop-blur-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
          <AlertDialogDescription>
            Tem certeza que deseja excluir o cliente <span className="font-semibold text-gray-900">{selectedClient?.name}</span>?
            <br />
            Esta ação não poderá ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>
            Cancelar
          </AlertDialogCancel>
          
          <AlertDialogAction
            onClick={(e) => {
              // IMPORTANTE: Previne o comportamento padrão de fechar o dialog imediatamente
              e.preventDefault();
              handleDeleteClient();
            }}
            className="bg-red-500 hover:bg-red-600 min-w-[100px]"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Excluindo...
              </>
            ) : (
              "Excluir"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}