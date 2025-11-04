import Card from "libs/components/card/Card";
import H2 from "libs/components/title/H2";
import { Client } from "libs/interface/Client";

const clients: Client[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 98765-4321',
    company: 'Tech Solutions Ltda',
    status: 'active',
    createdAt: '2024-10-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria.santos@email.com',
    phone: '(21) 97654-3210',
    company: 'Inovação Digital',
    status: 'active',
    createdAt: '2024-10-20T14:30:00Z',
  },
  {
    id: '3',
    name: 'Pedro Oliveira',
    email: 'pedro.oliveira@email.com',
    phone: '(11) 96543-2109',
    company: 'Consultoria Express',
    status: 'pending',
    createdAt: '2024-10-28T09:15:00Z',
  },
  {
    id: '4',
    name: 'Ana Costa',
    email: 'ana.costa@email.com',
    phone: '(31) 95432-1098',
    company: 'Marketing Pro',
    status: 'inactive',
    createdAt: '2024-09-05T16:45:00Z',
  },
  {
    id: '5',
    name: 'Carlos Mendes',
    email: 'carlos.mendes@email.com',
    phone: '(41) 94321-0987',
    company: 'Desenvolvimento Web',
    status: 'active',
    createdAt: '2024-11-01T11:20:00Z',
  },
  {
    id: '6',
    name: 'Juliana Ferreira',
    email: 'juliana.ferreira@email.com',
    phone: '(51) 93210-9876',
    company: 'Design Studio',
    status: 'active',
    createdAt: '2024-10-10T08:30:00Z',
  },
  {
    id: '7',
    name: 'Roberto Alves',
    email: 'roberto.alves@email.com',
    phone: '(61) 92109-8765',
    company: 'Sistemas Integrados',
    status: 'pending',
    createdAt: '2024-10-25T13:45:00Z',
  },
  {
    id: '8',
    name: 'Fernanda Lima',
    email: 'fernanda.lima@email.com',
    phone: '(71) 91098-7654',
    company: 'E-commerce Plus',
    status: 'active',
    createdAt: '2024-09-12T10:20:00Z',
  },
  {
    id: '9',
    name: 'Ricardo Souza',
    email: 'ricardo.souza@email.com',
    phone: '(81) 90987-6543',
    company: 'Logística Rápida',
    status: 'inactive',
    createdAt: '2024-08-30T15:10:00Z',
  },
  {
    id: '10',
    name: 'Patricia Rocha',
    email: 'patricia.rocha@email.com',
    phone: '(85) 99876-5432',
    company: 'Educação Online',
    status: 'active',
    createdAt: '2024-11-02T09:00:00Z',
  },
  {
    id: '11',
    name: 'Lucas Barbosa',
    email: 'lucas.barbosa@email.com',
    phone: '(91) 98765-4321',
    company: 'Agro Tech',
    status: 'pending',
    createdAt: '2024-10-18T11:30:00Z',
  },
  {
    id: '12',
    name: 'Camila Martins',
    email: 'camila.martins@email.com',
    phone: '(92) 97654-3210',
    company: 'Saúde Digital',
    status: 'active',
    createdAt: '2024-09-28T14:15:00Z',
  },
  {
    id: '13',
    name: 'Gabriel Pereira',
    email: 'gabriel.pereira@email.com',
    phone: '(95) 96543-2109',
    company: 'Fintech Moderna',
    status: 'active',
    createdAt: '2024-10-05T16:40:00Z',
  },
  {
    id: '14',
    name: 'Beatriz Cardoso',
    email: 'beatriz.cardoso@email.com',
    phone: '(96) 95432-1098',
    company: 'Turismo Aventura',
    status: 'inactive',
    createdAt: '2024-08-22T12:25:00Z',
  },
  {
    id: '15',
    name: 'Thiago Carvalho',
    email: 'thiago.carvalho@email.com',
    phone: '(97) 94321-0987',
    company: 'Imobiliária Premium',
    status: 'active',
    createdAt: '2024-10-30T10:50:00Z',
  },
  {
    id: '16',
    name: 'Amanda Reis',
    email: 'amanda.reis@email.com',
    phone: '(98) 93210-9876',
    company: 'Eventos & Cia',
    status: 'pending',
    createdAt: '2024-09-15T09:35:00Z',
  },
  {
    id: '17',
    name: 'Felipe Campos',
    email: 'felipe.campos@email.com',
    phone: '(99) 92109-8765',
    company: 'Consultoria Empresarial',
    status: 'active',
    createdAt: '2024-10-12T13:20:00Z',
  },
  {
    id: '18',
    name: 'Larissa Soares',
    email: 'larissa.soares@email.com',
    phone: '(11) 91098-7654',
    company: 'Moda & Estilo',
    status: 'active',
    createdAt: '2024-09-08T15:55:00Z',
  },
  {
    id: '19',
    name: 'Bruno Teixeira',
    email: 'bruno.teixeira@email.com',
    phone: '(21) 90987-6543',
    company: 'Delivery Express',
    status: 'inactive',
    createdAt: '2024-08-18T11:05:00Z',
  },
  {
    id: '20',
    name: 'Mariana Castro',
    email: 'mariana.castro@email.com',
    phone: '(31) 99876-5432',
    company: 'Arquitetura Moderna',
    status: 'active',
    createdAt: '2024-10-22T14:30:00Z',
  },
  {
    id: '21',
    name: 'Diego Monteiro',
    email: 'diego.monteiro@email.com',
    phone: '(41) 98765-4321',
    company: 'Segurança Digital',
    status: 'pending',
    createdAt: '2024-09-20T10:15:00Z',
  },
  {
    id: '22',
    name: 'Rafaela Gomes',
    email: 'rafaela.gomes@email.com',
    phone: '(51) 97654-3210',
    company: 'Pet Shop VIP',
    status: 'active',
    createdAt: '2024-10-08T12:40:00Z',
  },
];

export default function Home() {
  return (
    <>
      <H2>
        Dashboard
      </H2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <p className="text-gray-500">Total de Clientes</p>
          <p className="text-blue-600 mt-2">{clients.length}</p>
        </Card>
        <Card>
          <p className="text-gray-500">Clientes Ativos</p>
          <p className="text-green-600 mt-2">
            {clients.filter((c) => c.status === 'active').length}
          </p>
        </Card>
        <Card>
          <p className="text-gray-500">Clientes Pendentes</p>
          <p className="text-yellow-600 mt-2">
            {clients.filter((c) => c.status === 'pending').length}
          </p>
        </Card>
      </div>
    </>
  );
}
