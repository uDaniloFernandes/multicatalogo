// App.tsx

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Importe o componente Button do Shadcn
import { Heart } from 'lucide-react'; // Importe o ícone de coração da biblioteca lucide-react

import './App.css';
import dados from './dados.json';

// Interfaces de tipagem
interface Livro {
  id: string;
  titulo: string;
  autor: string;
  ano: number;
  capa: string;
}

interface Animal {
  id: string;
  nome: string;
  especie: string;
  imagem: string;
}

interface Pessoa {
  id: string;
  nome: string;
  ocupacao: string;
  imagem: string; // O seu JSON tem a propriedade 'imagem', não 'foto'.
}

function App() {
  const [favoritos, setFavoritos] = useState<string[]>([]); // Estado para armazenar os IDs dos itens favoritos

  const handleFavoritar = (id: string) => {
    setFavoritos(prevFavoritos => {
      if (prevFavoritos.includes(id)) {
        return prevFavoritos.filter(favId => favId !== id);
      } else {
        return [...prevFavoritos, id];
      }
    });
  };

  const getFavoritosData = () => {
    const todasCategorias = [
      ...dados.animais,
      ...dados.livros,
      ...dados.pessoas
    ];
    return todasCategorias.filter(item => favoritos.includes(item.id));
  };

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <Tabs defaultValue="animais" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="animais">Animais</TabsTrigger>
          <TabsTrigger value="livros">Livros</TabsTrigger>
          <TabsTrigger value="pessoas">Pessoas</TabsTrigger>
          <TabsTrigger value="favoritos">Favoritos</TabsTrigger>
        </TabsList>

        <TabsContent value="animais">
          <Card>
            <CardContent className="p-4 grid gap-4">
              {dados.animais.map(animal => (
                <div key={animal.id} className="flex flex-col items-center text-center relative">
                  <Button
                    onClick={() => handleFavoritar(animal.id)}
                    className="absolute top-2 right-2 p-1 rounded-full w-8 h-8"
                    variant="ghost"
                  >
                    <Heart
                      className={`h-4 w-4 ${favoritos.includes(animal.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                    />
                  </Button>
                  <img src={animal.imagem} alt={animal.nome} className="w-full h-auto rounded mb-2" />
                  <h3 className="text-lg font-bold">{animal.nome}</h3>
                  <p className="text-sm text-gray-500">{animal.especie}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="livros">
          <Card>
            <CardContent className="p-4 grid gap-4">
              {dados.livros.map(livro => (
                <div key={livro.id} className="flex flex-col items-center text-center relative">
                  <Button
                    onClick={() => handleFavoritar(livro.id)}
                    className="absolute top-2 right-2 p-1 rounded-full w-8 h-8"
                    variant="ghost"
                  >
                    <Heart
                      className={`h-4 w-4 ${favoritos.includes(livro.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                    />
                  </Button>
                  <img src={livro.capa} alt={livro.titulo} className="w-full h-auto rounded mb-2" />
                  <h3 className="text-lg font-bold">{livro.titulo}</h3>
                  <p className="text-sm text-gray-500">{livro.autor}</p>
                  <p className="text-xs text-gray-400">({livro.ano})</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pessoas">
          <Card>
            <CardContent className="p-4 grid gap-4">
              {dados.pessoas.map(pessoa => (
                <div key={pessoa.id} className="flex flex-col items-center text-center relative">
                  <Button
                    onClick={() => handleFavoritar(pessoa.id)}
                    className="absolute top-2 right-2 p-1 rounded-full w-8 h-8"
                    variant="ghost"
                  >
                    <Heart
                      className={`h-4 w-4 ${favoritos.includes(pessoa.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                    />
                  </Button>
                  <img src={pessoa.imagem} alt={pessoa.nome} className="w-full h-auto rounded mb-2" />
                  <h3 className="text-lg font-bold">{pessoa.nome}</h3>
                  <p className="text-sm text-gray-500">{pessoa.ocupacao}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favoritos">
          <Card>
            <CardContent className="p-4 grid gap-4">
              {getFavoritosData().length > 0 ? (
                getFavoritosData().map((item: any) => (
                  <div key={item.id} className="flex flex-col items-center text-center relative">
                     <Button
                      onClick={() => handleFavoritar(item.id)}
                      className="absolute top-2 right-2 p-1 rounded-full w-8 h-8"
                      variant="ghost"
                    >
                      <Heart
                        className={`h-4 w-4 ${favoritos.includes(item.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                      />
                    </Button>
                    <img src={item.imagem || item.capa} alt={item.nome || item.titulo} className="w-full h-auto rounded mb-2" />
                    <h3 className="text-lg font-bold">{item.nome || item.titulo}</h3>
                    <p className="text-sm text-gray-500">{item.especie || item.autor || item.ocupacao}</p>
                    {item.ano && <p className="text-xs text-gray-400">({item.ano})</p>}
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">Nenhum item favorito ainda.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;