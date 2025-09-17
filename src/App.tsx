import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card,CardContent } from "@/components/ui/card"
import './App.css'
import dados from './dados.json';


function App() {

  return (
      <div className="flex flex-col h-screen w-screen justify-center items-center">
      <Tabs defaultValue="animais" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="animais">Animais</TabsTrigger>
          <TabsTrigger value="livros">Livros</TabsTrigger>
          <TabsTrigger value="pessoas">Pessoas</TabsTrigger>
        </TabsList>

        <TabsContent value="animais">
          <Card>
            <CardContent className="p-4 grid gap-4">
              {dados.animais.map(animal => (
                <div key={animal.id} className="flex flex-col items-center text-center">
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
                <div key={livro.id} className="flex flex-col items-center text-center">
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
                <div key={pessoa.id} className="flex flex-col items-center text-center">
                  <img src={pessoa.imagem} alt={pessoa.nome} className="w-full h-auto rounded mb-2" />
                  <h3 className="text-lg font-bold">{pessoa.nome}</h3>
                  <p className="text-sm text-gray-500">{pessoa.ocupacao}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default App
