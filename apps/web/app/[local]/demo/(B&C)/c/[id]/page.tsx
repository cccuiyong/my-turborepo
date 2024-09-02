import { LocalType } from "@repo/local/src/base";

export const generateStaticParams = async () => {
    return [
        {   local: 'cn',
            id: '1',
        },
        {   local: 'cn',
            id: '2',
        },{
            local: 'cn',
            id: '3',
        },
    ];
};

export const dynamicParams = false;
export default async ({ params }: { params: { id: string, local: LocalType} }) => {
    await new Promise((res: (value: unknown) => void) => setTimeout(() => res(''), 3000));
    return (
        <>
        {params.id}
        </>
    )
}