"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { api } from "libs/services/api";
import { Client } from "libs/interface/Client";
import { toast } from "sonner";

interface ClientContextType {
  clients: Client[];
  isLoading: boolean;
  isSaving: boolean;
  isDeleting: boolean;
  refreshClients: () => Promise<void>;
  addClient: (client: Omit<Client, 'id'>) => Promise<boolean>;
  updateClient: (client: Client) => Promise<boolean>;
  removeClient: (id: string) => Promise<boolean>;
}

const ClientContext = createContext<ClientContextType>({} as ClientContextType);

export function ClientProvider({ children }: { children: ReactNode }) {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const refreshClients = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/clients');
      setClients(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao carregar lista de clientes.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshClients();
  }, []);

  const addClient = async (clientData: Omit<Client, 'id'>) => {
    setIsSaving(true);
    try {
      const response = await api.post('/clients', clientData);
      setClients((prev) => [...prev, response.data]);
      toast.success("Cliente criado com sucesso!");
      return true;
    } catch (error) {
      console.error(error);
      toast.error("Erro ao criar cliente.");
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  const updateClient = async (clientData: Client) => {
    setIsSaving(true);
    try {
      const response = await api.put(`/clients/${clientData.id}`, clientData);
      setClients((prev) => prev.map((c) => (c.id === clientData.id ? response.data : c)));
      toast.success("Cliente atualizado com sucesso!");
      return true;
    } catch (error) {
      console.error(error);
      toast.error("Erro ao atualizar cliente.");
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  const removeClient = async (id: string) => {
    setIsDeleting(true);
    try {
      await api.delete(`/clients/${id}`);
      setClients((prev) => prev.filter((c) => c.id !== id));
      toast.success("Cliente removido com sucesso!");
      return true;
    } catch (error) {
      console.error(error);
      toast.error("Erro ao excluir cliente.");
      return false;
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <ClientContext.Provider
      value={{
        clients,
        isLoading,
        isSaving,
        isDeleting,
        refreshClients,
        addClient,
        updateClient,
        removeClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}

export const useClients = () => useContext(ClientContext);