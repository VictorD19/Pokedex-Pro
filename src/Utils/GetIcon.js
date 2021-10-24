const getIconType = (type)=>{
        switch (type) {
            case "Fire":
                return "http://www.rw-designer.com/icon-view/21169.png";
            case "Grass":
                return "http://www.rw-designer.com/icon-view/21171.png";
            case "Water":
                return "http://www.rw-designer.com/icon-view/21170.png";
            case "Normal":
                return "http://www.rw-designer.com/icon-view/21168.png";
            case "Bug":
                return "http://www.rw-designer.com/icon-view/21178.png";
            case "Poison":
                return "http://www.rw-designer.com/icon-view/21183.png";
            case "Electric":
                return "http://www.rw-designer.com/icon-view/21179.png";
            case "Steel":
                return "http://www.rw-designer.com/icon-view/21180.png";
            case "Flying":
                return "http://www.rw-designer.com/icon-view/21175.png";
            case "Ground":
                return "http://www.rw-designer.com/icon-view/21172.png";
            case "Rock":
                return "http://www.rw-designer.com/icon-view/21174.png";
            case "Ghost":
                return "http://www.rw-designer.com/icon-view/21187.png";
            case "Psychic":
                return "http://www.rw-designer.com/icon-view/21185.png";
            case "Ice":
                return "http://www.rw-designer.com/icon-view/21176.png";
            case "Dragon":
                return "http://www.rw-designer.com/icon-view/21189.png";
            case "Dark":
                return "http://www.rw-designer.com/icon-view/21184.png";
            case "Fairy":
                return "http://www.rw-designer.com/icon-view/21188.png";
            default:
                return "#e6e6e6";
        }
}
export{getIconType}