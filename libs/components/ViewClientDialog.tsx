"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Mail, Phone, Building2, Calendar, Activity } from 'lucide-react';
import { Badge } from './ui/badge';
import { Client } from 'libs/interface/Client';

interface ViewClientDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  client: Client | null;
}

const statusColors = {
  active: 'bg-green-100 text-green-700 border-green-200',
  inactive: 'bg-gray-100 text-gray-700 border-gray-200',
  pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
};

const statusLabels = {
  active: 'Ativo',
  inactive: 'Inativo',
  pending: 'Pendente',
};

export function ViewClientDialog({ open, onOpenChange, client }: ViewClientDialogProps) {
  if (!client) return null;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white/95 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle>Detalhes do Cliente</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-gray-900">{client.name}</h3>
              <div className="mt-2">
                <Badge variant="outline" className={statusColors[client.status]}>
                  <Activity className="w-3 h-3 mr-1" />
                  {statusLabels[client.status]}
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="grid gap-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50/50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-500">E-mail</p>
                <p className="text-gray-900">{client.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-gray-50/50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-gray-500">Telefone</p>
                <p className="text-gray-900">{client.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-gray-50/50 rounded-lg">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-500">Empresa</p>
                <p className="text-gray-900">{client.company}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-gray-50/50 rounded-lg">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-gray-500">Data de Cadastro</p>
                <p className="text-gray-900">{formatDate(client.createdAt)}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
