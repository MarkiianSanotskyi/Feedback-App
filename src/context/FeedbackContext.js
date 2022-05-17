import { createContext, useState, useEffect } from "react";


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })



    useEffect(() => {
        setIsLoading(true)
        fetchFeedback()
        setIsLoading(false)
    }, [])

    // Fetch feedback
    const fetchFeedback = async() => {
        const response = await fetch(
            '/feedback?_sort=id&_order=desc'
        )
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }


    // Add Feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()
        
        setFeedback([data, ...feedback])

    }

    // Delete Feedback
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`/feedback/${id}`, {method: 'DELETE' }) 

            setFeedback(feedback.filter((item0) => item0.id !== id))
        }

    }

    // Update feedback Item

    const updateFeedback = async (id, updItem) => {

        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem),
        })

        const data = await response.json()

        setFeedback(

            feedback.map((item) => (item.id === id ? {...item, ...data } : item))
        )
    }

    //  Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }



    return <FeedbackContext.Provider value = {
        {
            feedback: feedback,
            feedbackEdit: feedbackEdit,
            isLoading: isLoading,
            deleteFeedback: deleteFeedback,
            addFeedback: addFeedback,
            editFeedback: editFeedback,
            updateFeedback: updateFeedback,

        }
    } > { children }

    </FeedbackContext.Provider>


}

export default FeedbackContext