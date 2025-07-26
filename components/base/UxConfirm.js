import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
/* COMPONENT */
import UxButton from '@/components/base/UxButton';
import UxGrid from '@/components/base/UxGrid';

/**
 * <UxConfirm>
 * [props]
 *
 * [event]
 *
 */

const UxConfirm = ({ ref, ...props }) => {
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
					<h4>알림</h4>
				</div>
				<div className={`${baseClassName}-main`}>
					{props.message}
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

export default UxConfirm;