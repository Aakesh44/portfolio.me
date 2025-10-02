import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Button } from './ui/button';
import { ChevronDownIcon } from 'lucide-react';

type Props<T> = {
    items: T[];
    max?: number;

    keyExtractor?: (item: T) => string;
    renderItem: (item: T) => React.ReactNode;
}
const CollapsibleList = <T,>({ items, max = 3, renderItem }: Props<T>) => {
    return (
        <Collapsible>

            {items.slice(0, max).map((item) => renderItem(item))}

            <CollapsibleContent>
                {items.slice(max).map((item) => renderItem(item))}
            </CollapsibleContent>

            {items.length > max && (
                <div className="flex h-12 items-center justify-center pb-px">
                    <CollapsibleTrigger asChild>
                        <Button
                            className="group/collapsible-trigger flex "
                            variant="default"
                        >   
                            <span className=" hidden group-data-[state=closed]/collapsible-trigger:block ">
                                Show More
                            </span>

                            <span className=" hidden group-data-[state=open]/collapsible-trigger:block">
                                Show Less
                            </span>

                            <ChevronDownIcon
                                className="group-data-[state=open]/collapsible-trigger:rotate-180"
                                aria-hidden
                            />
                        </Button>
                    </CollapsibleTrigger>
                </div>
            )}
        </Collapsible>
)}

export default CollapsibleList;