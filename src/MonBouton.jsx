function MonBouton(props) {
  // On crée une petite logique pour la couleur du bouton
  const couleurs = {
    green: "bg-green-500 hover:bg-green-600",
    red: "bg-red-500 hover:bg-red-600",
    orange: "bg-orange-500 hover:bg-orange-600"
  };

  return (
    <button 
      onClick={props.action}
      className={`${couleurs[props.couleur]} text-white font-bold py-3 px-6 rounded-xl shadow-lg transform transition active:scale-95 m-2`}
    >
      {props.texte}
    </button>
  );
}

export default MonBouton;