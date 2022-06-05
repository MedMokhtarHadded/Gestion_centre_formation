export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-people',
        title: '2',
        subtitle: "Nombre d'assistants"
    },
    {
        bgcolor: 'danger',
        icon: 'bi-file-earmark-person',
        title: '3',
        subtitle: "Nombre de formateur"
    },
    {
        bgcolor: 'warning',
        icon: 'bi bi-person-workspace',
        title: '100',
        subtitle: "Nombre d'apprenants"
    },
    {
        bgcolor: 'info',
        icon: 'bi bi-book',
        title: '6',
        subtitle: "Nombre de formations"
    },

] 