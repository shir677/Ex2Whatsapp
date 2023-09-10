import './GreenBoxChat.css'
import PeopleListChats from './PeopleListChats/PeopleListChats'

export default function GreenBoxChat({ currentUser }) {

    return (
        <div className="greenBoxChats">
            <PeopleListChats currentUser={currentUser} />
        </div>
    )
}