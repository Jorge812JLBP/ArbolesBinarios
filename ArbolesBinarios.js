const chalk = require('chalk');
console.log(chalk.green("Hola Profe"));

class ArbolBinario
{
    constructor ()
    {
        this.raiz=null;
        this.hijoIzq=null;
        this.hijoDer=null;
    }




    
    
    Agregar(nuevo)
    {
        if (this.raiz==null)
        {
            this.raiz=nuevo;
        }
        
        else
        {
            this.queTeAtienda(nuevo, this.raiz);
        }
        
    }









    queTeAtienda(nuevo, nodo)
    {
        if (nuevo<nodo)
        {
            if(nodo.hijoIzq==null)
            {
                nodo.hijoIzq=nuevo;
            }
            else
            {
              this.queTeAtienda(nuevo, nodo.hijoIzq);
            }
            
        } 
        else
        {
            if (nodo.hijoDer==null)
            {
                nodo.hijoDer=nuevo;
            }
            else
            {
                this.queTeAtienda(nuevo, nodo.hijoDer);
            }
           
        }
            
    }









    InOrder()
    {
        if (this.raiz==null)
        {
            console.log(".");
        }
        else
        {
            this.ProcesaInOrder(this.raiz);
        }
             
        
        
    }
        
    ProcesaInOrder(nodo)   
    {
        if (nodo.hijoIzq!=null)
        {
            this.ProcesaInOrder(nodo.hijoIzq);
            console.log(nodo);  
        }  
        if (nodo.hijoDer!=null)
        {
            this.ProcesaInOrder(nodo.hijoDer);
        }   
           
    }












    PreOrder()
    {
        if (this.raiz==null)
        {
            console.log(".");
        }
            
        else
        {
            this.ProcesaPreOrder(this.raiz);
        }
            
    }
        
    ProcesaPreOrder(nodo)  
    {
        console.log(nodo);  

        if (nodo.hijoIzq!=null)
        {
            this.ProcesaPreOrder(nodo.hijoIzq);
        }  
         
        if (nodo.hijoDer!=null)
        {
            this.ProcesaPreOrder(nodo.hijoDer);
        }  
        
    }












    PostOrder()
    {
        if (this.raiz==null)
        {
            console.log(".");
        }
           
        else
        {
            this.ProcesaPostOrder(this.raiz);
        }
             
    }
        
    ProcesaPostOrder(nodo)  
    {
        
        if (nodo.hijoIzq!=null) 
        {
            this.ProcesaPostOrder(nodo.hijoIzq);
        } 
        
        if (nodo.hijoDer!=null)
        {
            this.ProcesaPostOrder(nodo.hijoDer);
        }  
       
        console.log(nodo);  
    }
}
