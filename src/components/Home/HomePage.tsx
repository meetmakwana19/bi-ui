import React from 'react'
import { Button } from '@contentstack/venus-components'
import { useNavigate } from 'react-router-dom'
import { IMicroAppsObj } from '../../app/common/models';

const HomePage = ({ microAppsObj }: { microAppsObj: IMicroAppsObj }) => {
    const navigate = useNavigate();
    return (
        <div style={{ padding: "2rem" }}>
            <h1>
                HomePage
            </h1>
            <br />

            <Button version="v2" onClick={() => navigate(`/projects/${microAppsObj.token}`)}>
                Go to Intelligence Hub
            </Button>
        </div>
    )
}

export default HomePage