import type { FC } from "react";

interface PreviousSearchProps {
    subtitle?: string;
    searches: string[];
    onLabelClicked: (term: string) => void;
}

export const PreviousSearch: FC<PreviousSearchProps> = ({ subtitle, searches, onLabelClicked }) => {
    return (
        <div className="previous-searches">
            <h2>{subtitle}</h2>
            <ul className="previous-searches-list">
                {searches.map((term) => (
                    <li key={term}
                        onClick={() => onLabelClicked(term)}
                    >{term}</li>
                ))}
            </ul>
        </div>
    )
}