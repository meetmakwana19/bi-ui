import React from 'react'
import { Button, PageHeader, PageLayout, StackCard } from '@contentstack/venus-components'
import { Link, useHistory } from 'react-router-dom'
import { IMicroAppsObj } from '../../app/common/models';
import { ButtonGroup } from 'react-bootstrap';

const HomePage = ({ microAppsObj }: { microAppsObj: IMicroAppsObj }) => {
    const history = useHistory();

    const header = {
        component: (
            <PageHeader title={{ label: "Inelligence Hub Home" }} />
        )
    }
    const content = {
        component: (
            <>
                <Link to={`/projects/${microAppsObj.project_id}`}>
                    <StackCard
                        title={"Project 1"}
                        version='v2'
                    />
                </Link>
            </>
        )
    }
    return (
        <PageLayout header={header} content={content} type="card" />
    )
}

export default HomePage