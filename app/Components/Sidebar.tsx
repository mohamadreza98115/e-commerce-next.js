import React from "react";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Button,
    Card,
    Checkbox,
    Input,
    List,
    Rating,
    Typography
} from "@/app/Components/MaterialTailwindExporter";

type IconProps = {
    id: number;
    open: number;
}

function Icon({id, open}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
        </svg>
    );
}

const Sidebar = () => {
    const [open, setOpen] = React.useState(0);
    const [rated, setRated] = React.useState(4);

    const handleOpen = (value: React.SetStateAction<number>) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] px-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4 pb-0">
                <Typography variant="h5" color="blue-gray">
                    Filters
                </Typography>
            </div>
            <List>
                <Typography>Categories: </Typography>
                <div className="flex flex-col w-max">
                    <Checkbox label={'Phone'} crossOrigin={'auto'}/>
                    <Checkbox label={'Tablet'} crossOrigin={'auto'}/>
                    <Checkbox label={'Computer'} crossOrigin={'auto'}/>
                    <Accordion className={'w-1/2'} open={open === 1} icon={<Icon id={1} open={open}/>}>
                        <AccordionHeader className={'font-light'} onClick={() => handleOpen(1)}>Others</AccordionHeader>
                        <AccordionBody>
                            <Checkbox label={'Phone'} crossOrigin={'auto'}/>
                            <Checkbox label={'Tablet'} crossOrigin={'auto'}/>
                            <Checkbox label={'Computer'} crossOrigin={'auto'}/>
                        </AccordionBody>
                    </Accordion>
                </div>
                <div className={'flex flex-col'}>
                    <Typography className={'mb-2'}>Price Range</Typography>
                    <Input value={'$'} variant={'outlined'} label={'Price'} crossOrigin={'auto'}/>
                    <Button size={'sm'} className={'bg-blue-700 mt-1'}>Set price</Button>
                </div>
                <Typography className={'mt-2'}>Rating</Typography>
                <div className="flex items-center gap-2">
                    <Rating value={4} onChange={(value) => setRated(value)}/>
                    <Typography color="blue-gray" className="font-medium">
                        {rated}.0 Rated
                    </Typography>
                </div>
            </List>
        </Card>
    );
}

export default Sidebar;