export const TestimonialCard = ({name, testimony}) => {
    return (
        <div className="rounded-lg bg-amber-300 w-xl p-10">
            <h1 className="text-xl font-bold">{name} and {testimony}</h1>
        </div>
    )
}