"use client";

import React, { useEffect, useState } from "react";
import { isMobile, isBrowser, BrowserView } from "react-device-detect";
import useModal from "@/hook/useModal";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxInput from "@/components/base/UxInput";
import UxSelect from "@/components/base/UxSelect";
import UxOption from "@/components/base/UxOption";
import UxGroup from "@/components/base/UxGroup";
import UxCard from "@/components/base/UxCard";
import UxButton from "@/components/base/UxButton";
import UxCheckbox from "@/components/base/UxCheckbox";
/* DATA */
import actor from '@/public/data/actor';
import movie from '@/public/data/movie';
import thumb from '@/public/data/thumb';

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
						<UxGroup className="col1 gap4">
							<dl className="define column thumb">
								<dt>
									<span className="thumb">
										<img src={`/images/actor/${data.id}.jpg`} alt={data.name.en} />
									</span>
								</dt>
								<dd>
									{
										(data.name.kr || data.name.en || data.name.cn) &&
										<dl className="define name">
											<dt>이름</dt>
											<dd>
												<span>{data.name.kr}</span>
												<span>{data.name.en}</span>
												<span>{data.name.cn}</span>
											</dd>
										</dl>
									}
									{
										data.birth &&
										<dl className="define birth">
											<dt>생일</dt>
											<dd>
												<span>{data.birth}</span>
												<span>{data.korean}</span>
												<span>{data.age}</span>
											</dd>
										</dl>
									}
									{
										data.height &&
										<dl className="define">
											<dt>신장</dt>
											<dd>{data.height}</dd>
										</dl>
									}
									{
										(data.size.bust || data.size.waist || data.size.hips) &&
										<dl className="define size">
											<dt>신체사이즈</dt>
											<dd>
												<span>{data.size.bust}{data.bra && ` (${data.bra})`}</span>
												<span>{data.size.waist}</span>
												<span>{data.size.hips}</span>
											</dd>
										</dl>
									}
									{
										data.debut &&
										<dl className="define">
											<dt>데뷔</dt>
											<dd>{data.debut}</dd>
										</dl>
									}
								</dd>
							</dl>
							{
								(data.title || data.desc) &&
								<dl className="define column desc">
									<dt>{data.title}</dt>
									<dd>{data.desc}</dd>
								</dl>
							}
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxSection>
			<UxSection className="footer">
				<UxArticle>
					<UxContent>
						<UxGroup>
							<UxButton className="primary h3">
								<span>확인</span>
							</UxButton>
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxSection>
		</>
	);
};

const Movie = ({ ref, ...props }) => {
	const [data, setData] = useState({});

	useEffect(() => {
		const filterMovie = movie.filter(item => item.name === props.name);
		const filterThumb = thumb.filter(item => item.name === props.name);

		if (filterMovie.length) {
			filterMovie[0].image = filterThumb[0].image;
			setData(filterMovie[0]);
		}
	}, [props.data]);

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
						<UxGroup className="link">
							<UxButton
								role="link"
								href={`https://123av.com/ko/v/${data.name}`}
								target="_blank"
							>
								<span>123AV</span>
								<i className="icon mask muted link x18" />
							</UxButton>
							<UxButton
								role="link"
								href={`https://missav123.com/ko/${data.name}`}
								target="_blank"
							>
								<span>MISSAV</span>
								<i className="icon mask muted link x18" />
							</UxButton>
						</UxGroup>
						<UxGroup className="col1 gap4">
							{
								data.image &&
								<span className="thumb">
									<img src={data.image} alt={data.name} />
								</span>
							}
							{
								data.title &&
								<dl className="define column">
									<dt>제목</dt>
									<dd>{data.title}</dd>
								</dl>
							}
							{
								data.story &&
								<dl className="define column">
									<dt>설명</dt>
									<dd>{data.story}</dd>
								</dl>
							}
							{
								data.producer &&
								<dl className="define column">
									<dt>제작사</dt>
									<dd>{data.producer}</dd>
								</dl>
							}
							{
								data.series &&
								<dl className="define column">
									<dt>시리즈</dt>
									<dd>{data.series}</dd>
								</dl>
							}
							{
								data.runtime &&
								<dl className="define">
									<dt>재생시간</dt>
									<dd>{data.runtime}</dd>
								</dl>
							}
							{
								data.release &&
								<dl className="define">
									<dt>출시일</dt>
									<dd>{data.release}</dd>
								</dl>
							}
							<ul className="list cast">
								{
									data.cast?.map((item, index) => (
										<li
											key={index}
											className="bl pound"
										>
											{item}
										</li>
									))
								}
							</ul>
							<ul className="list category">
								{
									data.category?.map((item, index) => (
										<li
											key={index}
											className="bl pound"
										>
											{item}
										</li>
									))
								}
							</ul>
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxSection>
			<UxSection className="footer">
				<UxArticle>
					<UxContent>
						<UxGroup>
							<UxButton className="primary h3">
								<span>확인</span>
							</UxButton>
						</UxGroup>
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
	const [select, setSelect] = useState('en');
	const [search, setSearch] = useState('');
	const [checked, setChecked] = useState(true);
	const [status, setStatus] = useState([]);

	const handleSearch = (value) => {
		setSearch(value);
	};

	const handleActor = (data) => {
		modal.center(Actor, {
			caseClassName: 'actor',
			footer: false,
			data,
		});
	};

	const handleError = (id) => {
		setStatus((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, exist: false } : item
			)
		);
	};

	const handleMovie = (name) => {
		if (isBrowser) {
			modal.full(Movie, {
				caseClassName: 'movie',
				footer: false,
				name,
			});
		}

		if (isMobile) {
			modal.center(Movie, {
				caseClassName: 'movie',
				footer: false,
				name,
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
			if (select === 'en') {
				return item.name.en.toLowerCase().includes(search.toLowerCase());
			}
			if (select === 'kr') {
				return item.name.kr.includes(search);
			}
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
		if (!status.length) {
			setStatus(actor.map(item => ({ id: item.id, exist: true })));
		}
	}, []);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return;

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<UxGroup
						role="input"
					>
						<UxSelect
							value={select}
							inside
							onChange={(value) => setSelect(value)}
						>
							<UxOption value="en">EN</UxOption>
							<UxOption value="kr">KR</UxOption>
						</UxSelect>
						<UxInput
							className="fill"
							placeholder="검색어를 입력하세요"
							value={search}
							clear
							inside
							onChange={handleSearch}
						/>
						<UxButton>
							<i className="icon mask search x24" />
						</UxButton>
					</UxGroup>
				</UxSubject>
				<UxArticle className="h4 space">
					<UxContent>
						<UxGroup className="row between">
							<span className="fw500 fs18">총 <em className="fw600 red">{filterData.length}</em> 건</span>
							<BrowserView renderWithFragment>
								<UxCheckbox
									role="switch"
									checked={checked}
									onChange={(value) => setChecked(value)}
								/>
							</BrowserView>
						</UxGroup>
						<UxGroup className="actor col1">
							{
								filterData.map((data) => {
									const item = {...data, ...getAge(data.birth)};
									const exist = status.filter(item => item.id === data.id)[0].exist;

									return (
										<UxCard
											key={item.id}
											className="actor"
										>
											<dl className="actor">
												<dt className="subject">
													<span>{item.name.en}</span>
													<UxButton
														className="info"
														onClick={() => handleActor(item)}
													>
														<i className="icon mask muted share x20" />
													</UxButton>
												</dt>
												<dd className="details">
													<BrowserView renderWithFragment>
														<dl className="define thumb">
															<dt>
																<span className="thumb">
																	{
																		(!checked || !exist) &&
																		<i className="icon mask image disabled x44" />
																	}
																	{
																		(checked && exist) &&
																		<img
																			src={`/images/actor/${item.id}.jpg`}
																			alt={item.name.en}
																			onError={() => handleError(item.id)}
																		/>
																	}
																</span>
															</dt>
															<dd>
																{
																	(item.name.kr || item.name.en || item.name.cn) &&
																	<dl className="define name">
																		<dt>이름</dt>
																		<dd>
																			<span>{item.name.kr}</span>
																			<span>{item.name.en}</span>
																			<span>{item.name.cn}</span>
																		</dd>
																	</dl>
																}
																{
																	item.birth &&
																	<dl className="define birth">
																		<dt>생일</dt>
																		<dd>
																			<span>{item.birth}</span>
																			<span>{item.korean}</span>
																			<span>{item.age}</span>
																		</dd>
																	</dl>
																}
																{
																	item.height &&
																	<dl className="define">
																		<dt>신장</dt>
																		<dd>{item.height}</dd>
																	</dl>
																}
																{
																	(item.size.bust || item.size.waist || item.size.hips) &&
																	<dl className="define size">
																		<dt>신체사이즈</dt>
																		<dd>
																			<span>{item.size.bust}{item.bra && ` (${item.bra})`}</span>
																			<span>{item.size.waist}</span>
																			<span>{item.size.hips}</span>
																		</dd>
																	</dl>
																}
																{
																	item.debut &&
																	<dl className="define">
																		<dt>데뷔</dt>
																		<dd>{item.debut}</dd>
																	</dl>
																}
															</dd>
														</dl>
														{
															(item.title || item.desc) &&
															<dl className="define column desc">
																<dt>{item.title}</dt>
																<dd>{item.desc}</dd>
															</dl>
														}
													</BrowserView>
												</dd>
											</dl>
											<dl className="movie">
												<dt className="subject">
													<span className="title">Curated</span>
													<span className="count">{item.movie.length}</span>
												</dt>
												<dd className="details">
													<UxGroup className="link">
														{item.movie.map((item, index) => (
															<UxButton
																key={index}
																className="tertiary capsule h4"
																onClick={() => handleMovie(item)}
															>
																<span>{item}</span>
																<i className="icon mask share muted x18" />
															</UxButton>
														))}
													</UxGroup>
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