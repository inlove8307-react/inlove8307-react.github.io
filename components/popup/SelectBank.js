"use client";

import React, { useState, useEffect } from 'react';
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxButton from '@/components/base/UxButton';
import UxTab from '@/components/base/UxTab';
import UxPanel from '@/components/base/UxPanel';
import UxGroup from '@/components/base/UxGroup';
/* DATA */
import data from '@/public/data/code';

/**
 * <Popup>
 * [props]
 *
 * [event]
 *
 */

const Popup = ({ ref, ...props }) => {
	const handleClose = () => {
		props.onClose();
	}

	const handleClick = (sector, code) => {
		props.onClose({ sector, code });
	}

	return (
		<>
			<UxSection className="header">
				<UxArticle>
					<UxContent>
						<h4>{props.title || '선택'}</h4>
						<UxButton onClick={handleClose}>
							<i className="icon close" />
						</UxButton>
					</UxContent>
				</UxArticle>
			</UxSection>
			<UxSection className="main">
				<UxArticle>
					<UxContent>
						<UxTab
							className="block bank"
						>
							<UxPanel>
								<div slot="summary">은행</div>
								<div slot="details">
									<UxGroup className="col3">
										{
											data.filter((item) => item.sector === 'bank').map((item, index) => (
												<UxButton
													key={index}
													onClick={() => handleClick(item.sector, item.code)}
												>
													<dl>
														<dt>
															<i className={`icons bank-${item.code}`} />
														</dt>
														<dd>{item.name}</dd>
													</dl>
												</UxButton>
											))
										}
									</UxGroup>
								</div>
							</UxPanel>
							<UxPanel>
								<div slot="summary">증권사</div>
								<div slot="details">
									<UxGroup className="col3">
										{
											data.filter((item) => item.sector === 'stock').map((item, index) => (
												<UxButton
													key={index}
													onClick={() => handleClick(item.sector, item.code)}
												>
													<dl>
														<dt>
															<i className={`icons stock-${item.code}`} />
														</dt>
														<dd>{item.name}</dd>
													</dl>
												</UxButton>
											))
										}
									</UxGroup>
								</div>
							</UxPanel>
						</UxTab>
					</UxContent>
				</UxArticle>
			</UxSection>
		</>
	);
};

export default Popup;