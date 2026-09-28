"use client";

import React, { useEffect, useState } from "react";
import { isMobile, isBrowser, MobileView, BrowserView } from "react-device-detect";
import useModal from "@/hook/useModal";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxInput from "@/components/base/UxInput";
import UxGroup from "@/components/base/UxGroup";
import UxCard from "@/components/base/UxCard";
import UxButton from "@/components/base/UxButton";
/* DATA */
import actor from '@/public/data/actor';

const Actor = ({ ref, ...props }) => {
	const data = props.data;

	return (
		<>
			<UxSection className="header">
				<UxArticle>
					<UxSubject>
						<h3>{data.name.en}</h3>
						<UxButton onClick={props.onClose}>
							<i className="icon close" />
						</UxButton>
					</UxSubject>
				</UxArticle>
			</UxSection>
			<UxSection className="main">
				<UxArticle>
					<UxContent>
						<dl className="define column">
							<dt>title</dt>
							<dd>
								{data.title}
							</dd>
						</dl>
						<dl className="define column">
							<dt>description</dt>
							<dd>
								{data.desc}
							</dd>
						</dl>
						<dl className="define name">
							<dt>name</dt>
							<dd>
								<span>{data.name.kr}</span>
								<span>{data.name.en}</span>
								<span>{data.name.cn}</span>
								{data.name.other.map((item, index) => (
									<span key={index}>{item}</span>
								))}
							</dd>
						</dl>
						<dl className="define birth">
							<dt>birth</dt>
							<dd>
								{data.birth && <span>{data.birth}</span>}
								{data.birth && <span>{data.korean}</span>}
								{data.birth && <span>{data.age}</span>}
							</dd>
						</dl>
						<dl className="define">
							<dt>height</dt>
							<dd>{data.height}</dd>
						</dl>
						<dl className="define size">
							<dt>size</dt>
							<dd>
								{data.size.bust && <span>{data.size.bust}</span>}
								{data.size.waist && <span>{data.size.waist}</span>}
								{data.size.hips && <span>{data.size.hips}</span>}
							</dd>
						</dl>
						<dl className="define">
							<dt>bra</dt>
							<dd>{data.bra}</dd>
						</dl>
						<dl className="define">
							<dt>debut</dt>
							<dd>{data.debut}</dd>
						</dl>
					</UxContent>
				</UxArticle>
			</UxSection>
			<UxSection className="footer">
				<UxArticle>
					<UxContent>
						{/* <UxGroup className="gap8">
							<UxButton
								className="primary h3"
								onClick={props.onClose}
							>
								확인
							</UxButton>
						</UxGroup> */}
					</UxContent>
				</UxArticle>
			</UxSection>
		</>
	);
};

const Movie = ({ ref, ...props }) => {
	const data = props.data;

	return (
		<>
			<UxSection className="header">
				<UxArticle>
					<UxSubject>
						<h3>{data.name}</h3>
						<UxButton onClick={props.onClose}>
							<i className="icon close" />
						</UxButton>
					</UxSubject>
				</UxArticle>
			</UxSection>
			<UxSection className="main">
				<UxArticle>
					<UxContent>
						<dl className="define column">
							<dt>title</dt>
							<dd>{data.title}</dd>
						</dl>
						<dl className="define column">
							<dt>story</dt>
							<dd>{data.story}</dd>
						</dl>
						<dl className="define column">
							<dt>producer</dt>
							<dd>{data.producer}</dd>
						</dl>
						<dl className="define column">
							<dt>publisher</dt>
							<dd>{data.publisher}</dd>
						</dl>
						<dl className="define column">
							<dt>series</dt>
							<dd>{data.series}</dd>
						</dl>
						<dl className="define column">
							<dt>director</dt>
							<dd>{data.director}</dd>
						</dl>
						<dl className="define">
							<dt>runtime</dt>
							<dd>{data.runtime}</dd>
						</dl>
						<dl className="define">
							<dt>release</dt>
							<dd>{data.release}</dd>
						</dl>
						<ul className="list cast">
							{
								data.cast.map((item, index) => (
									<li
										key={index}
										className="bl pound"
									>
										<a
											className="cast"
											href={`https://www.avdbs.com/menu/actor.php?actor_idx=${item.id}`}
											target="_blank"
										>
											{item.name}
										</a>
									</li>
								))
							}
						</ul>
						<ul className="list category">
							{
								data.category.map((item, index) => (
									<li
										key={index}
										className="bl pound"
									>
										<a
											className="category"
											href={`https://www.avdbs.com/menu/genre_av.php?menu=${item.menu}&cate=${item.cate}`}
											target="_blank"
										>
											{item.name}
										</a>
									</li>
								))
							}
						</ul>
					</UxContent>
				</UxArticle>
			</UxSection>
			<UxSection className="footer">
				<UxArticle>
					<UxContent>
						{/* <UxGroup className="gap8">
							<UxButton
								className="primary h3"
								onClick={props.onClose}
							>
								확인
							</UxButton>
						</UxGroup> */}
					</UxContent>
				</UxArticle>
			</UxSection>
		</>
	);
};

const Page = ({ ref, ...props }) => {
	const modal = useModal();
	const [isClient, setIsClient] = useState(false);
	const [actorData, setActorData] = useState([]);
	const [filterData, setFilterData] = useState([]);
	const [search, setSearch] = useState('');

	const handleSearch = (value) => {
		setSearch(value);
	};

	const handleActor = (data) => {
		modal.center(Actor, {
			caseClassName: 'actor',
			data,
		});
	};

	const handleMovie = (data) => {
		if (isBrowser) {
			modal.full(Movie, {
				caseClassName: 'movie',
				data,
			});
		}

		if (isMobile) {
			modal.center(Popup, {
				caseClassName: 'movie',
				data,
			});
		}
	};

	const getAge = (date) => {
		const today = new Date();
		const birth = new Date(date.replace(/\./g, '-'));
		const todayYear = today.getFullYear();
		const birthYear = birth.getFullYear();
		const korean = todayYear - birthYear + 1;
		const diff = today.getMonth() - birth.getMonth();
		let age = todayYear - birthYear;

		if (diff < 0 || (diff === 0 && today.getDate() < birth.getDate())) {
			age--;
		}

		return { age, korean };
	};

	useEffect(() => {
		const array = actorData.filter((item) => {
			return item.name.en.toLowerCase().includes(search.toLowerCase());
		});

		setFilterData(array);
	}, [search]);

	useEffect(() => {
		if (!actorData.length) {
			setActorData(actor);
		}

		if (actorData.length) {
			setFilterData(actorData);
		}
	}, [actorData]);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return;

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<UxInput
						role="search"
						placeholder="검색어를 입력하세요"
						value={search}
						clear
						onChange={handleSearch}
					/>
				</UxSubject>
				<UxArticle className="h4 space">
					<UxContent>
						<UxGroup className="actor col1">
							{
								filterData.map((data) => {
									const item = Object.assign(data, getAge(data.birth));

									return (
										<UxCard
											key={item.id}
											className="actor"
										>
											<dl className="actor">
												<dt className="subject">
													<a
														className="name"
														href={`https://www.avdbs.com/menu/actor.php?actor_idx=${item.id}`}
														target="_blank"
													>
														<span>{item.name.en}</span>
														<i className="icon mask muted link x18" />
													</a>
													<UxButton
														onClick={() => handleActor(item)}
													>
														<i className="icon mask muted share x18" />
													</UxButton>
												</dt>
												<BrowserView
													as="dd"
													className="details"
												>
													<dl className="define column">
														<dt>title</dt>
														<dd className="ellipsis">
															{item.title}
														</dd>
													</dl>
													<dl className="define column">
														<dt>description</dt>
														<dd className="ellipsis">
															{item.desc}
														</dd>
													</dl>
													<dl className="define name">
														<dt>name</dt>
														<dd>
															<span>{item.name.kr}</span>
															<span>{item.name.en}</span>
															<span>{item.name.cn}</span>
															{item.name.other.map((item, index) => (
																<span key={index}>{item}</span>
															))}
														</dd>
													</dl>
													<dl className="define birth">
														<dt>birth</dt>
														<dd>
															{item.birth && <span>{item.birth}</span>}
															{item.birth && <span>{item.korean}</span>}
															{item.birth && <span>{item.age}</span>}
														</dd>
													</dl>
													<dl className="define">
														<dt>height</dt>
														<dd>{item.height}</dd>
													</dl>
													<dl className="define size">
														<dt>size</dt>
														<dd>
															{item.size.bust && <span>{item.size.bust}</span>}
															{item.size.waist && <span>{item.size.waist}</span>}
															{item.size.hips && <span>{item.size.hips}</span>}
														</dd>
													</dl>
													<dl className="define">
														<dt>bra</dt>
														<dd>{item.bra}</dd>
													</dl>
													<dl className="define">
														<dt>debut</dt>
														<dd>{item.debut}</dd>
													</dl>
												</BrowserView>
											</dl>
											<dl className="movie">
												<dt className="subject">
													<span className="title">Curated</span>
													<span className="count">{item.movie.length}</span>
												</dt>
												<dd className="details">
													<ul className="link">
														{item.movie.map(item => (
															<li
																key={item.id}
																className="bl dot"
															>
																<UxGroup className="link">
																	<a
																		className="link"
																		href={`https://www.avdbs.com/menu/dvd.php?dvd_idx=${item.id}`}
																		target="_blank"
																	>
																		<span>{item.name}</span>
																		<i className="icon mask muted link x18" />
																	</a>
																	<a
																		className="link"
																		href={`https://123av.com/ko/v/${item.name}`}
																		target="_blank"
																	>
																		<span>123AV</span>
																		<i className="icon mask muted link x18" />
																	</a>
																	<a
																		className="link"
																		href={`https://missav123.com/ko/${item.name}`}
																		target="_blank"
																	>
																		<span>MissAV</span>
																		<i className="icon mask muted link x18" />
																	</a>
																	<UxButton
																		onClick={() => handleMovie(item)}
																	>
																		<i className="icon mask muted share x18" />
																	</UxButton>
																</UxGroup>
															</li>
														))}
													</ul>
												</dd>
											</dl>
										</UxCard>
									);
								})
							}
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxArticle>
		</UxSection>
	);
};

export default Page;