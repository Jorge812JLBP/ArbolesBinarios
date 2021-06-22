const chalk = require('chalk');

let cosas = new ArbolesBinarios();

let producto1 = new productos(1,"Nissan sentra",280000,2);
cosas.agregar(producto1);

let producto2 = new productos(2,"Nissan Juke",405000,4);
cosas.agregar(producto2);

let producto3 = new productos(3,"Nissan 350z",235000,6);
cosas.agregar(producto3);

let producto4 = new productos(4,"Nissan 240sx",170000,3);
cosas.agregar(producto4);

let producto5 = new productos(5,"Nissan 240z",150000,7);
cosas.agregar(producto5);

let producto6 = new productos(6,"Nissan GTR",2500000,8);
cosas.agregar(producto6)



class productos
{
    constructor (id,nombre,precio,cantidad)
    {
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.hijoIzq=null;
        this.hijoDer=null;
    }
    info()
    {
        return chalk.green("ID: "+this.id+ " Nombre: "+this.nombre+" Precio: "+this.precio+" Cantidad "+this.cantidad);
    }
}

class ArbolesBinarios
{
    constructor()
    {
        this.raiz=null;
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
        if (nuevo.id<nodo.id)
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
            console.log(nodo.info);  
        }  
        if (nodo.hijoDer!=null)
        {
            this.ProcesaInOrder(nodo.hijoDer);
            console.log(nodo.info);
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
        console.log(nodo.info);  

        if (nodo.hijoIzq!=null)
        {
            this.ProcesaPreOrder(nodo.hijoIzq);
            console.log(nodo.info);
        }  
         
        if (nodo.hijoDer!=null)
        {
            this.ProcesaPreOrder(nodo.hijoDer);
            console.log(nodo.info);
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
            console.log(nodo.info);
        } 
        
        if (nodo.hijoDer!=null)
        {
            this.ProcesaPostOrder(nodo.hijoDer);
            console.log(nodo.info);
        }  
       
        console.log(nodo.info);  
    }
}



    
    
   