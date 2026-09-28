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
        <p>Név: {props.name}</p>
        <p>Márka: {props.brand}</p>
        <p>Kakaótartalma: {props.cocoaPercentage}%</p>
        <p>Hozzávalók: {props.ingredients.join(", ")}</p>
        </>
    )
}