"use client";

import H2 from "libs/components/title/H2";
import { Button } from "libs/components/ui/button";
import { Plus, Loader2 } from "lucide-react";
import { ClientFilters } from "./ClientFilters";
import { useState } from "react";
import { Client } from "libs/interface/Client";
import { TablePagination } from "libs/components/TablePagination";
import { ClientDialog } from "libs/components/ClientDialog";
import { ViewClientDialog } from "libs/components/ViewClientDialog";
import { ClientsTable } from "libs/components/ClientsTable";
import DeleteClientDialog from "libs/components/DeleteClientDialog";
import { ClientProvider, useClients } from "libs/context/ClientContext";

interface IPayload {
    name: string;
    email: string;
    phone: string;
    company: string;
    status: "active" | "inactive" | "pending";
    createdAt: string;
}

function ClientManagerContent() {
  const { clients, isLoading, addClient, updateClient, removeClient, isSaving, isDeleting } = useClients();

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
  const paginatedClients = filteredClients.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleClearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setCurrentPage(1);
  };

  const handleNewClient = () => {
    setSelectedClient(null);
    setDialogOpen(true);
  };

  const handleEdit = (client: Client) => {
    setSelectedClient(client);
    setDialogOpen(true);
  };

  const handleDelete = (client: Client) => {
    setSelectedClient(client);
    setDeleteDialogOpen(true);
  };

  const handleView = (client: Client) => {
    setSelectedClient(client);
    setViewDialogOpen(true);
  };

  const handleSaveClient = async (clientData: Client) => {
    let success = false;
    
    const isNew = !clientData.id || clientData.id.toString().startsWith('client-');

    if (isNew) {
       const { id, ...payload } = clientData;
       success = await addClient(payload as IPayload);
    } else {
       success = await updateClient(clientData);
    }

    if (success) {
      setDialogOpen(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (selectedClient) {
      const success = await removeClient(selectedClient.id);
      if (success) {
        setDeleteDialogOpen(false);
        setSelectedClient(null);
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <H2 className="mb-1">Gerenciamento de Clientes</H2>
          <p className="text-gray-500 mt-1">Gerencie os clientes da plataforma</p>
        </div>
        <Button onClick={handleNewClient} className="bg-blue-500 hover:bg-blue-600">
          <Plus className="w-4 h-4 mr-2" />
          Novo Cliente
        </Button>
      </div>

      <ClientFilters
        searchTerm={searchTerm}
        setSearchTerm={(term) => { setSearchTerm(term); setCurrentPage(1); }}
        statusFilter={statusFilter}
        setStatusFilter={(status) => { setStatusFilter(status); setCurrentPage(1); }}
        onClearFilters={handleClearFilters}
      />

      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200/50 min-h-[400px]">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <Loader2 className="w-10 h-10 animate-spin mb-3 text-blue-500" />
            <p>Sincronizando dados...</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-700">
                {filteredClients.length} {filteredClients.length === 1 ? 'cliente encontrado' : 'clientes encontrados'}
              </p>
              <p className="text-gray-600">Página {currentPage} de {totalPages || 1}</p>
            </div>

            <ClientsTable
              clients={paginatedClients}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onView={handleView}
            />

            {filteredClients.length === 0 && (
                <div className="text-center py-8 text-gray-400">Nenhum registro encontrado.</div>
            )}

            {totalPages > 1 && (
              <TablePagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </div>

      <ClientDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        client={selectedClient}
        onSave={handleSaveClient}
        isLoading={isSaving}
      />

      <DeleteClientDialog
        deleteDialogOpen={deleteDialogOpen}
        setDeleteDialogOpen={setDeleteDialogOpen}
        selectedClient={selectedClient}
        handleDeleteClient={handleConfirmDelete}
        isLoading={isDeleting}
      />

      <ViewClientDialog
        open={viewDialogOpen}
        onOpenChange={setViewDialogOpen}
        client={selectedClient}
      />
    </>
  );
}

export default function ListCliente() {
  return (
    <ClientProvider>
      <ClientManagerContent />
    </ClientProvider>
  );
}