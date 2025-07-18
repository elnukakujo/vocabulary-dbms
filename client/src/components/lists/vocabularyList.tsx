"use client";

import { useParams, useRouter } from "next/navigation";
import NavButton from "../buttons/navButton";

type VocabularyProps = {
    items: Array<{
        id: string;
        word: string;
        translation: string;
    }>;
    count: number;
};

export default function VocabularyList({ vocProps}: { vocProps: VocabularyProps}) {
    const { language_id, unit_id } = useParams<{ language_id: string, unit_id: string }>();

    const router = useRouter();
    const handleClick = (id: string) => {
        router.push(`/languages/${language_id}/unit/${unit_id}/voc/${id}`);
    };
    return (
        <section className="flex flex-col gap-4 w-[14rem]">
            <h2>Vocabulary</h2>
            {vocProps.count === 0 ? <p>Empty</p> :
                <ul className="list-item pl-5 space-y-1">
                    {vocProps.items.map((item, index) => (
                        <li key={index}>
                            <button onClick={() => handleClick(item.id)}>
                                {(item as VocabularyProps["items"][0]).word} –{" "}{(item as VocabularyProps["items"][0]).translation}
                            </button>
                        </li>
                    ))}
                </ul>
            }
            <NavButton
                path = {`/languages/${language_id}/unit/${unit_id}/voc/new`}
            >
                <span>Add New Vocabulary</span>
            </NavButton>
        </section>
    );
}