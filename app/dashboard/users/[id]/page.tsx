

function usersDetails({ params }: { params: { id: string } }) {
    const { id } = params

    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-6xl">
            <h1>User profile: {id}</h1>
        </div>
    )
}

export default usersDetails