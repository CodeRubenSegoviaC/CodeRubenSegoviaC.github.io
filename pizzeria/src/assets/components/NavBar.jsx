function Opciones({nameOpcion}){
    return (
        <li>{nameOpcion}</li>
    )
}

function BarraNavegacion (){
    let tomas = "Bienvenido Tomas"
    const total = 25000;
    const token = false;

    if(token){
        return(
            <nav>
                <ul>
                    <Opciones nameOpcion={'Home '}/>
                    <Opciones nameOpcion={'Menu del Dia'}/>
                </ul>
                <ul>
                    <Opciones nameOpcion={'LogIn'}/>
                    <Opciones nameOpcion={'Register'}/>
                </ul>
                <ul>
                    <Opciones nameOpcion={'Total $0'}/>
                </ul>
            </nav>
        )
    } else{
        return(
            <nav>
                <ul>
                    <Opciones nameOpcion={'Home '+ tomas}/>
                    <Opciones nameOpcion={'Menu del Dia'}/>
                </ul>
                <ul>
                    <Opciones nameOpcion={'Profile'}/>
                    <Opciones nameOpcion={'LogOut'}/>
                    <Opciones nameOpcion={'Credits'}/>
                </ul>
                <ul>
                    <Opciones nameOpcion={'Total Carrito $'+ total}/>
                </ul>
            </nav>
        )
    }
}

export default BarraNavegacion;