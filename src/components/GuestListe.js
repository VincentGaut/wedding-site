import React, { useState,useEffect } from 'react';
import { useTable } from 'react-table';
import './../styles/GuestListe.css';


const GuestListe = ({data,doc}) => {
    const [fields, setFields] = useState(data);
    const [documents, setDocuments] = useState(doc);
    useEffect ( () => {
        //sessionStorage.removeItem("orga");
        setFields(fields)
        
      },[data])

      useEffect ( () => {
        //sessionStorage.removeItem("orga");
        setDocuments(doc)
        //console.log(doc)
      },[doc])
      
    return (
        <div className="table-container">
            <h1 className='title-liste'>Liste d'invité</h1>
            <table className="data-table">
                <thead>
                <tr>
                    <th>ID</th>
                    {fields.map(field => (
                    <th key={field}>{field}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {documents.map(doc => (
                    <tr key={doc.id}>
                    <td>{doc.id}</td>
                    {fields.map(field => (
                        <td key={field}>
                        {doc[field] !== undefined ? JSON.stringify(doc[field]) : 'N/A'}
                        </td>
                        
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

};

export default GuestListe;