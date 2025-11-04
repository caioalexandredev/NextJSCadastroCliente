"use client";

import { Search, Filter } from 'lucide-react';
import { Input } from 'libs/components/ui/input';
import { Button } from 'libs/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from 'libs/components/ui/select';

interface ClientFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  onClearFilters: () => void;
}

export function ClientFilters({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  onClearFilters,
}: ClientFiltersProps) {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md border border-gray-200/50 p-6">
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Buscar por nome, e-mail ou empresa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="w-48">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className='text-gray-900'>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <SelectValue placeholder="Filtrar por status" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os status</SelectItem>
              <SelectItem value="active">Ativo</SelectItem>
              <SelectItem value="inactive">Inativo</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {(searchTerm || statusFilter !== 'all') && (
          <Button variant="outline" onClick={onClearFilters}>
            Limpar Filtros
          </Button>
        )}
      </div>
    </div>
  );
}
