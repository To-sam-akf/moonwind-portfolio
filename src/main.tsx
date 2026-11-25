import React from 'react';
import {createRoot} from 'react-dom/client';
import Site from './site';
import Admin from './admin';
import './globals.css';
const parts=location.pathname.replace(import.meta.env.BASE_URL,'').split('/').filter(Boolean);
const route=parts[0];
createRoot(document.getElementById('root')!).render(route==='admin'?<Admin/>:<Site view={route==='life'?'life':route==='lab'?'lab':'home'}/>);
