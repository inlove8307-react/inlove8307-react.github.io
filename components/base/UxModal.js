import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
/* COMPONENT */
import UxButton from '@/components/base/UxButton';
import UxGrid from '@/components/base/UxGrid';
import UxIcon from '@/components/base/UxIcon';

const UxModal = ({ ref, ...props }) => {
	const baseClassName = 'ux-modal';
	const caseClassName = classnames(baseClassName, props.className);
	const [active, setActive] = useState();

	useEffect(() => {
		setTimeout(() => setActive(true), 1);
	}, []);

	return (
		<div className={classnames(caseClassName, { active })}>
			<div
				role="presentation"
				className={`${baseClassName}-backdrop`}
				onClick={props.onClose}
			/>
			<div className={`${baseClassName}-layout`}>
				<div className={`${baseClassName}-header`}>
					<h4>타이틀</h4>
					<UxButton onClick={props.onClose}>
						<UxIcon
							className="i001"
							size="2rem"
							color="#000"
						/>
					</UxButton>
				</div>
				<div className={`${baseClassName}-main`}>
					{props.children}
				</div>
				<div className={`${baseClassName}-footer`}>
					<UxGrid className="gap8">
						<UxButton
							className="contain h3 grow small"
							onClick={props.onClose}
						>
							취소
						</UxButton>
						<UxButton
							className="primary h3 grow full"
							onClick={props.onClose}
						>
							확인
						</UxButton>
					</UxGrid>
				</div>
			</div>
		</div>
	)
};

export default UxModal;