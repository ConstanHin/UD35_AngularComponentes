# UD35AngularComponentes

El proyecto se separa por dos vistas **vista1** y **vista2**.  
La **vista1** para el ejercicio 1, **vista2** para el ejercicio 2.

La vista se compone por el **module vista1**, y los componentes: **grupo-vista1, from y list**.  
El module vista1 que exporta el componente padre de la vista (GrupoVista1Component) que tiene como hijos los componentes (FormComponent, ListComponent) para luego ser utilizado por el componente principal (app).

## Routing

Utilizo el RouterModule para navegar entre las vistas para mostrar los dos ejercicios dinámicamente.

![image](https://user-images.githubusercontent.com/67373492/172196278-d3449e15-3bda-4bc5-a877-987c3a05397d.png)

Definición de las rutas en el archivo *app.module.ts* :  

~~~~
    RouterModule.forRoot([
      {path:"ej1", component:GrupoVista1Component},
      {path:"ej2", component:GrupoVista2Component}
    ]),
~~~~
Se renderizan los componentes padre de cada vista

## Ejercicio 1

### Los dos componentes del ejercicio 1
![image](https://user-images.githubusercontent.com/67373492/172043835-1f32f0f1-f59e-46a2-bbad-baa06c3f58a4.png)

## Ejercicio 2

Se compone por el module **vista2**, el componente padre **GrupoVista2**, los componentes hijos de GrupoVista2: **Form2** y **ListaContactos**, el componente **Mensaje** hijo del componente ListaContactos.

### Componente formulario del ejercicio 2

![image](https://user-images.githubusercontent.com/67373492/172193118-174d05e2-b94d-4e86-ba3b-05c53ee2c5b3.png)

### Componente lista de mensaje del ejercicio 2
Tiene como hijo/s el componente **mensaje**.
![image](https://user-images.githubusercontent.com/67373492/172197673-8b1df1e4-6cb3-4228-bdf9-b9716811c381.png)
