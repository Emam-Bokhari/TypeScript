{
    const getDisplayName = (name: string | null | undefined): string => {
        const result = name ?? "Anonymous"
        return result;
    }

    const result=getDisplayName(null)
    console.log(result)
}