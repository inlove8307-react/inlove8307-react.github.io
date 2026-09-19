"use client";

import React, { useState } from "react";
import useModal from "@/hook/useModal";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxCard from "@/components/base/UxCard";
import UxButton from "@/components/base/UxButton";
/* DATA */
import data from '@/public/data/link';

const Popup = ({ref, ...props}) => {
	return (
		<>
			<UxSection className="header">
				<UxArticle>
					<UxSubject>
						<h3>{props.title || '알림'}</h3>
						<UxButton onClick={props.onClose}>
							<i className="icon close" />
						</UxButton>
					</UxSubject>
				</UxArticle>
			</UxSection>
			<UxSection className="main">
				<UxArticle className="h4">
					<UxContent>
						<iframe
							src={props.link}
							style={{
								overflow: 'hidden',
								width: '100%',
								height: '80vh',
								border: '0',
								boxShadow: 'var(--inset)',
								borderRadius: '1.6rem'
							}}
						/>
					</UxContent>
				</UxArticle>
			</UxSection>
			<UxSection className="footer">
				<UxArticle>
					<UxContent>
						<UxGroup className="gap8">
							<UxButton
								className="secondary h3"
								onClick={props.onClose}
							>
								취소
							</UxButton>
							<UxButton
								className="primary h3"
								onClick={props.onClose}
							>
								확인
							</UxButton>
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxSection>
		</>
	)
};

export default function Home() {
	const modal = useModal();
	const [progress, setProgress] = useState(25);

	const handleClick = ({name, link}) => {
		modal.center(Popup, {
			title: name,
			link,
		});
	};

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>Links</h3>
				</UxSubject>
				<UxArticle className="h4 space">
					<UxContent>
						<UxGroup className="actor col3">
							{
								data.map((item, index) => (
									<UxCard className="actor">
										<dl>
											<dt>
												<p className="actor-name">{item.name}</p>
												{
													item.info.map((link, index) => (
														// <UxButton
														// 	key={index}
														// 	className="actor-meta"
														// 	onClick={() => handleClick({
														// 		name: item.name,
														// 		link,
														// 	})}
														// >
														// 	<em>{link}</em>
														// </UxButton>
														<a
															key={index}
															href={link}
															className="actor-meta"
															target="_blank"
														>
															{link}
														</a>
													))
												}
											</dt>
											<dd>
												{
													item.link.map((link, index) => (
														// <UxButton
														// 	key={index}
														// 	className="actor-link"
														// 	onClick={() => handleClick({
														// 		name: item.name,
														// 		link,
														// 	})}
														// >
														// 	<em>{link}</em>
														// </UxButton>
														<a
															key={index}
															href={link}
															className="actor-link"
															target="_blank"
														>
															{link}
														</a>
													))
												}
												</dd>
										</dl>
									</UxCard>
								))
							}
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxArticle>
		</UxSection>
	);
};