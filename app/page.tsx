"use client";

import Card from "libs/components/card/Card";
import H2 from "libs/components/title/H2";
import { Loader2 } from "lucide-react";
import { ClientProvider, useClients } from "libs/context/ClientContext";

function DashboardContent() {
  const { clients, isLoading } = useClients();

  const total = clients.length;
  const active = clients.filter((c) => c.status === 'active').length;
  const pending = clients.filter((c) => c.status === 'pending').length;

  const renderCardContent = (value: number, colorClass: string) => {
    if (isLoading) {
      return (
        <div className="mt-2 h-8 flex items-center">
           <Loader2 className={`w-5 h-5 animate-spin ${colorClass}`} />
        </div>
      );
    }
    return <p className={`${colorClass} mt-2 text-2xl`}>{value}</p>;
  };

  return (
    <>
      <H2>Dashboard</H2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        
        <Card>
          <div className="p-4">
            <p className="text-sm font-medium text-gray-500">Total de Clientes</p>
            {renderCardContent(total, "text-blue-600")}
          </div>
        </Card>

        <Card>
          <div className="p-4">
             <p className="text-sm font-medium text-gray-500">Clientes Ativos</p>
             {renderCardContent(active, "text-green-600")}
          </div>
        </Card>

        <Card>
          <div className="p-4">
            <p className="text-sm font-medium text-gray-500">Clientes Pendentes</p>
            {renderCardContent(pending, "text-yellow-600")}
          </div>
        </Card>
        
      </div>
    </>
  );
}

export default function Home() {
  return (
    <ClientProvider>
      <DashboardContent />
    </ClientProvider>
  );
}