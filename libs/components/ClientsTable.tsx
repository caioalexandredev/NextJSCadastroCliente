"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Pencil, Trash2, Eye } from 'lucide-react';
import { Client } from 'libs/interface/Client';

interface ClientsTableProps {
  clients: Client[];
  onEdit: (client: Client) => void;
  onDelete: (client: Client) => void;
  onView: (client: Client) => void;
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

export function ClientsTable({ clients, onEdit, onDelete, onView }: ClientsTableProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR');
  };

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md border border-gray-200/50 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50/50">
            <TableHead>Nome</TableHead>
            <TableHead>E-mail</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Empresa</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Data Cadastro</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id} className="hover:bg-gray-50/50">
              <TableCell>{client.name}</TableCell>
              <TableCell className="text-gray-600">{client.email}</TableCell>
              <TableCell className="text-gray-600">{client.phone}</TableCell>
              <TableCell className="text-gray-600">{client.company}</TableCell>
              <TableCell>
                <Badge variant="outline" className={statusColors[client.status]}>
                  {statusLabels[client.status]}
                </Badge>
              </TableCell>
              <TableCell className="text-gray-600">{formatDate(client.createdAt)}</TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onView(client)}
                    className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:text-green-800"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(client)}
                    className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:text-blue-800"
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDelete(client)}
                    className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
