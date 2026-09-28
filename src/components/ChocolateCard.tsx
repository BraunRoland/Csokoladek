interface ChocolateCardProps {
    name: string
    brand: string
    isDark: boolean
    cocoaPercentage: number
    ingredients: string[]
}

export function ChocolateCard(props: ChocolateCardProps) {
    return(
        <>
        <div className="card" style={{backgroundColor: props.isDark? '#333':'#fff', color: props.isDark? '#f2f2f2': '#000'}}>
            <p>Név: {props.name}</p>
            <p>Márka: {props.brand}</p>
            <p>Kakaótartalma: {props.cocoaPercentage}%</p>
            <p>Hozzávalók: {props.ingredients.join(", ")}</p>
            <p>{props.isDark? 'Ez egy étcsokoládé':'Ez tejcsoki vagy más típus'}</p>
        </div>
        </>
    )
}