import React from 'react'
import { Toaster } from 'react-hot-toast'
import './style/app.css'
import PageTitle from './components/PageTitle'
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'

function App() {
    return (
        <>
    <div className="container" > 
        <PageTitle> todo list </PageTitle>
        <AppHeader />
        <AppContent />
    </div>
    <Toaster
         position= "top-right" 
         toastOptions={{
            style: {
            fontSize: "20px"
        }
    }}/>
    </>
)}

export default App;